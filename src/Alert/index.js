/** Component Composition Model: Containment & Specialization:
 *
 * Components do not know before hand what there children are going to be !
 */
import { useTheme } from "../ThemeContext";
import "./Style.css";
export default function Alert({ children }) {
  const { showAlert } = useTheme();
  return (
    <>
      <div className={showAlert ? "overlay show" : "overlay"}>
        <div className="alert">{children}</div>
      </div>
    </>
  );
}
