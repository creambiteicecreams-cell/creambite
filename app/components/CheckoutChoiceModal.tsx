"use client";

interface CheckoutChoiceModalProps {
  open: boolean;
  onClose: () => void;
  onGuest: () => void;
  onLogin: () => void;
}

export default function CheckoutChoiceModal({
  open,
  onClose,
  onGuest,
  onLogin,
}: CheckoutChoiceModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-pink-600 px-6 py-5 text-white text-center">
          <h2 className="text-3xl font-bold">
            🍦 Cream Bite
          </h2>

          <p className="mt-2 text-pink-100">
            Choose how you'd like to continue
          </p>
        </div>

        <div className="p-6 space-y-5">

          {/* Login Card */}
          <button
            onClick={onLogin}
            className="w-full rounded-2xl border border-pink-200 p-5 text-left transition hover:border-pink-500 hover:bg-pink-50"
          >
            <div className="flex items-center gap-4">

              <div className="text-4xl">
                👤
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Login
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Save orders, wishlist and addresses for faster checkout.
                </p>
              </div>

            </div>
          </button>

          {/* Guest Card */}
          <button
            onClick={onGuest}
            className="w-full rounded-2xl border border-green-200 p-5 text-left transition hover:border-green-500 hover:bg-green-50"
          >
            <div className="flex items-center gap-4">

              <div className="text-4xl">
                🛒
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Continue as Guest
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Place your order without creating an account.
                </p>
              </div>

            </div>
          </button>

          {/* Cancel */}
          <button
            onClick={onClose}
            className="mt-2 w-full rounded-xl border py-3 font-semibold text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
}