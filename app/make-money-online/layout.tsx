import Script from "next/script";
import type { ReactNode } from "react";

export default function MakeMoneyOnlineLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Script id="bemob-callback-mmo" strategy="beforeInteractive">
        {`
          function bemobCb(params) {
              var t = params.trackingDomain+'/click/';
              var re = new RegExp(t+'?(\\\\d*)');
              var e = document.querySelectorAll('a[href*="'+t+'"]');
              for (var i = 0; i < e.length; i++) {
                  var ex = re.exec(e[i].href);
                  if (ex) {
                      e[i].href = params.ctaSecureUrl.replace('%%OFFER_NUMBER%%', ex || 1);
                  }
              }
          }
        `}
      </Script>
      <Script id="bemob-tracking-mmo" strategy="beforeInteractive">
        {`
          !function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://k7xlm.bemobtrcks.com/landing/67f4c02b-ee54-4a9e-9382-ec6ca1ef4f6f?callback=bemobCb&rule=1&path=1&landing=1&"+window.location.search.substring(1);var b=document.getElementsByTagName("script");b.parentNode.insertBefore(a,b)}();
        `}
      </Script>
      <noscript>
        <img src="https://k7xlm.bemobtrcks.com/landing/67f4c02b-ee54-4a9e-9382-ec6ca1ef4f6f?rule=1&path=1&landing=1" alt="" />
      </noscript>
      {children}
    </>
  );
}
