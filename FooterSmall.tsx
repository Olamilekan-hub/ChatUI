export default function FooterSmall() {
  return (
    <>
      <div>
        <hr className="border-t-[10px] border-gray-300" />
        <div className="bg-gray-100 w-full  p-8">
          <ul className="flex gap-2 text-sm text-bold">
            <li>Airbnb</li>
            <span className="mt-1">
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                className="h-2 w-2 block fill-current text-[var(--linaria-theme_palette-hof)]"
              >
                <path
                  d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
            <li>Romania</li>
            <span className="mt-1">
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                className="h-2 w-2 block fill-current text-[var(--linaria-theme_palette-hof)]"
              >
                <path
                  d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
            <li>Sibui Region</li>
            <span className="mt-1">
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                className="h-2 w-2 block fill-current text-[var(--linaria-theme_palette-hof)]"
              >
                <path
                  d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
            <li>Sibui</li>
          </ul>
        </div>
      </div>
    </>
  );
}
