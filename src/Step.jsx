const Step = () => {
  const steps = [1, 2, 3, 4, 5, 6];
  const currentStep = 3; // Example: Step 3 is active
  return (
    <div className="flex items-center justify-center space-x-0 p-4 rounded-md">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-0 text-sm">
          {/* Line before each step except the first */}
          {index !== 0 && (
            <div
              className={`h-1 w-[47.6px] ${
                step <= currentStep ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></div>
          )}

          {/* Step circle */}
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full border ${
              step < currentStep
                ? " bg-gradient-to-r from-[#FFB800] to-[#FF7A00] text-white border-none"
                : step === currentStep
                ? "border border-[#FFB800]  text-orange-500 bg-white"
                : "border-gray-300 text-black"
            }`}
          >
            {step}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step;
