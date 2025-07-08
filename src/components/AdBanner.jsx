// components/AdBanner.js
import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsbygoogle error", e);
    }
  }, []);

  return (

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-6281762512696604"
     data-ad-slot="9720619879"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  );
};

export default AdBanner;
