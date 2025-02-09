import {ReactComponent as QuestionMarkIcon} from "../../assets/icons/question_mark.svg";
import styles from "./NotFoundPanel.module.css";

function NotFoundPanel() {
    return (
        <div className={styles.not_found_panel}>
            <QuestionMarkIcon className={styles.question_mark}/>
            <p>Sorry, the word you are looking for does not exist.</p>
        </div>
      );
}

export default NotFoundPanel;