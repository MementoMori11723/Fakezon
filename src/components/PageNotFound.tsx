import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <center>
        <Link to={`/`}>
          <img className="p-2 m-2" src={`../logo.gif`} />
        </Link>
        <br />
        <br />
        <table align="center" cellPadding={4} border={0}>
          <tbody>
            <tr>
              <td>
                <img
                  className="p-1"
                  src={`../question.svg`}
                  alt="question mark"
                  width={40}
                  height={35}
                />
              </td>
              <td valign="middle" className="font-sans">
                <b className="text-orange-300">Looking for something?</b>
                <br />
                <b>
                  We're sorry. The Web address you entered is not a functioning
                  page on our site.
                </b>
                <br />
                <br />
                <div className="flex">
                  <img src={`../arrow.gif`} className="w-[10px] h-[9px] mt-2" />
                  <b className="pl-2">
                    Go to Fakezon{" "}
                    <Link to={`/`}>
                      <span className="text-blue-900 underline">Home</span>
                    </Link>{" "}
                    Page
                  </b>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default PageNotFound;
