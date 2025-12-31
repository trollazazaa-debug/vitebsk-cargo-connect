import { useState, useEffect, forwardRef } from "react";
import { X, MessageCircle, ArrowUp } from "lucide-react";

const FloatingButtons = forwardRef<HTMLDivElement>((_, forwardedRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 rounded-full bg-muted-foreground/80 hover:bg-muted-foreground flex items-center justify-center shadow-lg transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        title="Наверх"
      >
        <ArrowUp className="w-5 h-5 text-background" />
      </button>

      {/* Messenger buttons */}
      <div className={`flex flex-col items-end gap-3 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        {/* WhatsApp */}
        <a
          href="https://wa.me/375256775849"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isOpen ? "150ms" : "0ms" }}
          title="WhatsApp"
        >
          <svg className="w-7 h-7 text-background" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        {/* Viber */}
        <a
          href="viber://chat?number=375256775849"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isOpen ? "100ms" : "0ms" }}
          title="Viber"
        >
          <svg className="w-7 h-7 text-background" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.182.635 6.68.573 9.82.512 12.96.406 18.902 6.094 20.503l.007.002-.004 2.32s-.037.939.584 1.13c.751.232 1.193-.484 1.91-1.254.393-.422.936-1.043 1.347-1.519 3.713.313 6.573-.4 6.9-.5.752-.233 5.01-.79 5.702-6.448.715-5.84-.338-9.536-2.218-11.202l-.002-.001c-.52-.479-2.63-2.04-7.37-2.022-.003 0-.234-.01-.552-.007zm.098 1.694c.283-.003.478.006.478.006 4.026-.017 5.837 1.246 6.271 1.65 1.6 1.415 2.457 4.717 1.844 9.718-.589 4.817-4.108 5.17-4.73 5.363-.27.082-2.75.692-5.863.457 0 0-2.323 2.8-3.048 3.527-.113.115-.245.162-.333.145-.124-.024-.158-.145-.157-.32l.024-3.832c-.004-.002-.01-.004-.011-.006-4.765-1.341-4.485-6.399-4.434-9.085.052-2.686.548-4.797 1.996-6.23 1.946-1.782 5.501-2.094 7.486-2.387.248-.036.358-.007.477-.006zM8.867 5.544c-.247-.006-.487.098-.672.32l-.002.001c-.193.22-.476.546-.651.792-.335.472-.371.944-.198 1.382.002.006.005.013.008.02.508 1.164 1.2 2.244 2.053 3.217.025.03.051.06.077.088.862.977 1.898 1.79 3.05 2.416l.011.006c.009.005.017.008.025.013.244.123.516.189.794.189.402 0 .801-.127 1.079-.405.192-.19.46-.508.72-.8.193-.216.302-.507.294-.797-.012-.316-.16-.606-.473-.842l-.006-.004-.007-.005a18.29 18.29 0 00-1.725-.992c-.393-.192-.898-.056-1.137.29l-.366.528c-.112.148-.304.189-.465.11l-.003-.002-.006-.002c-.26-.11-1.081-.48-1.885-1.333-.803-.853-1.15-1.687-1.253-1.95l-.002-.003-.002-.006c-.07-.163-.018-.356.13-.458l.54-.343c.352-.226.514-.706.352-1.115a16.59 16.59 0 00-.901-1.779l-.002-.004c-.135-.192-.332-.375-.588-.462a1.196 1.196 0 00-.367-.055l.002-.005zm3.19.665c-.102 0-.186.083-.186.186s.084.186.186.186c1.123.008 2.16.459 2.928 1.202.768.742 1.253 1.763 1.29 2.88.003.103.087.184.189.181.102-.003.183-.087.18-.19-.04-1.19-.561-2.283-1.388-3.083-.826-.8-1.94-1.287-3.139-1.295-.022-.001-.04-.067-.06-.067zm.14 1.135c-.101-.008-.188.067-.197.168-.01.1.066.189.167.198.648.06 1.207.33 1.627.737.42.407.716.957.802 1.596.012.1.103.173.205.161.1-.012.172-.104.16-.205-.098-.738-.44-1.38-.929-1.855-.488-.474-1.134-.78-1.861-.848l.025.048zm.208 1.17c-.103-.004-.19.077-.195.18-.004.102.076.19.179.194.331.014.61.135.813.325.202.191.342.46.367.779.01.103.1.179.202.17.103-.009.179-.1.17-.203-.032-.42-.212-.78-.478-1.031-.265-.252-.624-.407-1.031-.422l-.027.008z"/>
          </svg>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/vitexpress"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isOpen ? "50ms" : "0ms" }}
          title="Telegram"
        >
          <svg className="w-7 h-7 text-background" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:shadow-xl ${
          isOpen
            ? "bg-muted-foreground hover:bg-muted-foreground/90 rotate-0"
            : "bg-primary hover:bg-primary/90 pulse-ring"
        }`}
      >
        <div className="relative w-7 h-7">
          <X
            className={`w-7 h-7 text-background absolute transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
            }`}
          />
          <MessageCircle
            className={`w-7 h-7 text-primary-foreground absolute transition-all duration-300 ${
              isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
            }`}
          />
        </div>
      </button>
    </div>
  );
});

FloatingButtons.displayName = "FloatingButtons";

export default FloatingButtons;
