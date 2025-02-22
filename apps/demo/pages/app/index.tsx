import formbricks from "@formbricks/js";
import Image from "next/image";
import { useEffect, useState } from "react";
import fbsetup from "../../public/fb-setup.png";

export default function AppPage({}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="h-screen bg-white px-12 py-6 dark:bg-slate-800">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Formbricks In-product Survey Demo App
          </h1>
          <p className="text-slate-700 dark:text-slate-300">
            This app helps you test your in-app surveys. You can create and test user actions, create and
            update user attributes, etc.
          </p>
        </div>
        <button
          className="rounded-lg bg-slate-200 px-6 py-1 dark:bg-slate-700 dark:text-slate-100"
          onClick={() => setDarkMode(!darkMode)}>
          Toggle Dark Mode
        </button>
      </div>

      <div className="my-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <div className="rounded-lg border border-slate-300 bg-slate-100 p-6 dark:border-slate-600 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Setup .env</h3>
            <p className="text-slate-700 dark:text-slate-300">
              Copy the environment ID of your Formbricks app to the env variable in demo/.env
            </p>
            <Image src={fbsetup} alt="fb setup" className="mt-4 rounded" priority />
          </div>
          <div className="mt-4 rounded-lg border border-slate-300 bg-slate-100 p-6 dark:border-slate-600 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Widget Logs</h3>
            <p className="text-slate-700 dark:text-slate-300">
              Look at the logs to understand how the widget works.{" "}
              <strong className="dark:text-white">Open your browser console</strong> to see the logs.
            </p>
            {/* <div className="max-h-[40vh] overflow-y-auto py-4">
              <LogsContainer />
            </div> */}
          </div>
        </div>

        <div className="md:grid md:grid-cols-3">
          <div className="col-span-3 rounded-lg border border-slate-300 bg-slate-100 p-6 dark:border-gray-600 dark:bg-gray-800">
            <h3 className="text-lg font-semibold dark:text-white">
              Reset person / pull data from Formbricks app
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              On formbricks.logout() a few things happen: <strong>New person is created</strong> and{" "}
              <strong>surveys & no-code actions are pulled from Formbricks:</strong>.
            </p>
            <button
              className="my-4 rounded-lg bg-slate-500 px-6 py-3 text-white hover:bg-slate-700 dark:bg-gray-700 dark:hover:bg-gray-600"
              onClick={() => {
                formbricks.logout();
              }}>
              Logout
            </button>
            <p className="text-xs text-slate-700 dark:text-gray-300">
              If you made a change in Formbricks app and it does not seem to work, hit &apos;Logout&apos; and
              try again.
            </p>
          </div>

          <div className="p-6">
            <div>
              <button
                className="mb-4 rounded-lg bg-slate-800 px-6 py-3 text-white hover:bg-slate-700 dark:bg-gray-700 dark:hover:bg-gray-600"
                onClick={() => {
                  formbricks.track("Code Action");
                }}>
                Code Action
              </button>
            </div>
            <div>
              <p className="text-xs text-slate-700 dark:text-gray-300">
                This button sends a{" "}
                <a href="https://formbricks.com/docs/actions/code" className="underline" target="_blank">
                  Code Action
                </a>{" "}
                to the Formbricks API called &apos;Code Action&apos;. You will find it in the Actions Tab.
              </p>
            </div>
          </div>
          <div className="p-6">
            <div>
              <button className="mb-4 rounded-lg bg-slate-800 px-6 py-3 text-white hover:bg-slate-700  dark:bg-gray-700 dark:hover:bg-gray-600">
                No-Code Action
              </button>
            </div>
            <div>
              <p className="text-xs text-slate-700 dark:text-gray-300">
                This button sends a{" "}
                <a
                  href="https://formbricks.com/docs/actions/no-code"
                  className="underline dark:text-blue-500"
                  target="_blank">
                  No Code Action
                </a>{" "}
                as long as you created it beforehand in the Formbricks App.{" "}
                <a
                  href="https://formbricks.com/docs/actions/no-code"
                  target="_blank"
                  className="underline dark:text-blue-500">
                  Here are instructions on how to do it.
                </a>
              </p>
            </div>
          </div>
          <div className="p-6">
            <div>
              <button
                onClick={() => {
                  formbricks.setAttribute("Plan", "Free");
                }}
                className="mb-4 rounded-lg bg-slate-800 px-6 py-3 text-white hover:bg-slate-700  dark:bg-gray-700 dark:hover:bg-gray-600">
                Set Plan to &apos;Free&apos;
              </button>
            </div>
            <div>
              <p className="text-xs text-slate-700 dark:text-gray-300">
                This button sets the{" "}
                <a
                  href="https://formbricks.com/docs/attributes/custom-attributes"
                  target="_blank"
                  className="underline dark:text-blue-500">
                  attribute
                </a>{" "}
                &apos;Plan&apos; to &apos;Free&apos;. If the attribute does not exist, it creates it.
              </p>
            </div>
          </div>
          <div className="p-6">
            <div>
              <button
                onClick={() => {
                  formbricks.setAttribute("Plan", "Paid");
                }}
                className="mb-4 rounded-lg bg-slate-800 px-6 py-3 text-white hover:bg-slate-700  dark:bg-gray-700 dark:hover:bg-gray-600">
                Set Plan to &apos;Paid&apos;
              </button>
            </div>
            <div>
              <p className="text-xs text-slate-700 dark:text-gray-300">
                This button sets the{" "}
                <a
                  href="https://formbricks.com/docs/attributes/custom-attributes"
                  target="_blank"
                  className="underline dark:text-blue-500">
                  attribute
                </a>{" "}
                &apos;Plan&apos; to &apos;Paid&apos;. If the attribute does not exist, it creates it.
              </p>
            </div>
          </div>
          <div className="p-6">
            <div>
              <button
                onClick={() => {
                  formbricks.setEmail("test@web.com");
                }}
                className="mb-4 rounded-lg bg-slate-800 px-6 py-3 text-white hover:bg-slate-700  dark:bg-gray-700 dark:hover:bg-gray-600">
                Set Email
              </button>
            </div>
            <div>
              <p className="text-xs text-slate-700 dark:text-gray-300">
                This button sets the{" "}
                <a
                  href="https://formbricks.com/docs/attributes/identify-users"
                  target="_blank"
                  className="underline dark:text-blue-500">
                  user email
                </a>{" "}
                &apos;test@web.com&apos;
              </p>
            </div>
          </div>
          <div className="p-6">
            <div>
              <button
                onClick={() => {
                  formbricks.setUserId("THIS-IS-A-VERY-LONG-USER-ID-FOR-TESTING");
                }}
                className="mb-4 rounded-lg bg-slate-800 px-6 py-3 text-white hover:bg-slate-700  dark:bg-gray-700 dark:hover:bg-gray-600">
                Set User ID
              </button>
            </div>
            <div>
              <p className="text-xs text-slate-700 dark:text-gray-300">
                This button sets an external{" "}
                <a
                  href="https://formbricks.com/docs/attributes/identify-users"
                  target="_blank"
                  className="underline dark:text-blue-500">
                  user ID
                </a>{" "}
                to &apos;THIS-IS-A-VERY-LONG-USER-ID-FOR-TESTING&apos;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
