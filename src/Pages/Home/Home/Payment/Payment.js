import React from "react";
import paymentImg from "../../../../Images/Payment/payment.png";

const Payment = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 my-24">
        <div className="container mx-auto space-y-6 text-center lg:space-y-8">
          <h2 className="text-xl font-semibold">
            Secure and easy payment with wide range of checkout choices
          </h2>
          <img src={paymentImg} alt="" />
        </div>
        <hr />
      </section>
    </div>
  );
};

export default Payment;
