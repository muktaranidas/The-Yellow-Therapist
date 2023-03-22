import React from "react";

const Question = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 my-24">
        <h2 className="text-2xl font-bold  text-yellow-500 sm:text-3xl">
          Questions maybe circling in your mind:
        </h2>

        <div className="space-y-4">
          <details className="w-full">
            <summary className="px-4 py-6 underline  font-semibold">
              Yellow therapist reminds me of yellow journalists, why yellow?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              <small>
                As you could guess, we get that a lot. But we chose yellow
                because yellow is famously the happiest color, yellow is the
                symbol of happiness. So the therapists work here are yellow
                therapists in the best possible way, far from yellow
                journalists. So, no worries. Let's spread happiness.
              </small>
            </p>
          </details>
          <details className="w-full">
            <summary className="px-4 py-6 underline font-semibold ">
              This web design makes me sad, why is it so dull? Or, I don't like
              the design. Or, did you not pay your web designer?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              <small>
                We are really sorry that you felt that way. But to assure you,
                this is not our final design. We tend to bring the platform to
                the public as fast as possible, so we had no choice but to find
                perfection in the imperfect, just for now. And we are working
                relentlessly to make the platform better and better. Thanks for
                being with us.
              </small>{" "}
            </p>
          </details>
          <details className="w-full">
            <summary className="px-4 py-6 underline font-semibold ">
              Wait a minute, who are you people?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              <small>click here</small>
              <small></small>
            </p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Question;
