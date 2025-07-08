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
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-XXXX"
      data-ad-slot="YYYY"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdBanner;
