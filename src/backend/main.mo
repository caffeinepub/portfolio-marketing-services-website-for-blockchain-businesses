import OutCall "http-outcalls/outcall";
import Text "mo:core/Text";

actor {
  public query ({ caller }) func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };

  public shared ({ caller }) func fetchLinkPreview(url : Text) : async Text {
    if (url.size() > 1000) {
      return "URL too long";
    };

    // Check if URL uses HTTPS
    if (not url.startsWith(#text("https://"))) {
      return "Invalid URL. Must start with https://";
    };

    // Use free MetaLink API
    let apiKey = "kuY4AAi8";
    let apiUrl = "https://api.linkpreview.net/?key=" # apiKey # "&q=" # url;

    await OutCall.httpGetRequest(apiUrl, [], transform);
  };
};
