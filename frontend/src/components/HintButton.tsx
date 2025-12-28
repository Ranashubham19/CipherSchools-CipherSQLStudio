import { useState } from "react";

type Props = {
  mode: "basic" | "city";
};

export default function HintButton({ mode }: Props) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button className="hint-btn" onClick={() => setShow(!show)}>
        💡 Get Hint
      </button>

      {show && (
        <div className="hint-box">
          {mode === "basic" ? (
            <>
              <b>Hint:</b>
              <p>
                Use the <code>SELECT</code> keyword to retrieve data from a table.
                Think about how to fetch all columns from the <code>users</code>{" "}
                table.
              </p>
            </>
          ) : (
            <>
              <b>Hint:</b>
              <p>
                Use a <code>WHERE</code> clause to filter rows. Focus on comparing
                the <code>city</code> column with a specific value.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
