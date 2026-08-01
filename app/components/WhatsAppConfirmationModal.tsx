"use client";

interface WhatsAppConfirmationModalProps {
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export default function WhatsAppConfirmationModal({
  open,
  onConfirm,
  onClose,
}: WhatsAppConfirmationModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <div className="text-center">

          <div className="mb-4 text-6xl">
            📱
          </div>

          <h2 className="text-3xl font-bold">
            Complete Your Order
          </h2>

          <p className="mt-4 text-gray-600">
            Your order details have been prepared successfully.
          </p>

          <p className="mt-2 text-gray-600">
            Please send the WhatsApp message to complete your order.
          </p>

        </div>

        <div className="mt-8 space-y-3">

          <button
            onClick={onConfirm}
            className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            ✅ I've Sent the Message
          </button>

          <button
            onClick={onClose}
            className="w-full rounded-xl border py-3 font-semibold hover:bg-gray-100"
          >
            Continue Editing
          </button>

        </div>

      </div>
    </div>
  );
}