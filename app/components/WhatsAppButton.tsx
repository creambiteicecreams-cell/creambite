export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917975124421"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50"
    >
      <span className="text-3xl">💬</span>
    </a>
  );
}