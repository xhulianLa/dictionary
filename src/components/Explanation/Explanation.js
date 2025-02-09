import { useEffect } from "react";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import styles from "./Explanation.module.css"

function Explanation({data}) {

    const capitalizeWord = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const extractAudio = (dat) => {   
        console.log("Test:" + "" + dat); 
        for (const phonetic of dat.phonetics){
            if(phonetic.audio !='' && phonetic.audio != null){
                console.log("Checking audio:" + ""+ phonetic.audio);
                return phonetic.audio;
            }
            
        }
        return null;
    }

    useEffect(() => {
        console.log(data.phonetics)
    },[data]);
    

    return (<>
        <div className={styles.word_wrapper}>
            <div className={styles.word_header}>
                <h1 className={styles.word}>{capitalizeWord(data.word)}</h1>
                <h3 className={styles.phonetic}>{data.phonetic}</h3>
            </div>
            {extractAudio(data) && <AudioPlayer audioLink={extractAudio(data)} />}
        </div>
        {data.meanings.map((meaning, index) => {
            {console.log(meaning.synonyms.length)    }
            {if(meaning.synonyms.length > 0) {
                console.log("Check synonyms:")
                console.log(meaning.synonyms)
            }}
            return (
                <div key={index} className={styles.Explanation}>
                    <div className={styles.word_type_wrapper}>
                        <h1 className={styles.word_type}>{capitalizeWord(meaning.partOfSpeech)}</h1>
                        <div className={styles.section_line}></div>
                    </div>
                    <h3 key = {"meaning"+index} className={styles.meaning}>Meaning</h3>
                    <ul key = {"definition"+index} className={styles.definition_list}>
                        {meaning.definitions.map((definition, index) => {
                        
                            return (<>
                                <li key={index} className={styles.definition}>
                                    <p>{capitalizeWord(definition.definition)}</p>
                                </li>
                                {definition.example && <p className={styles.example}>{definition.example}</p>}
                            </>);
                        })}
                        {meaning.synonyms.length > 0 && (
                        <div className={styles.synonyms}>
                            <h3 className={styles.synonym_label}>Synonyms</h3>
                            <p className={styles.synonym}>{meaning.synonyms}</p>
                        </div>
                        )}
                    </ul>
                </div>
            );
        })}

        {/* {data.meanings.map((synonym, index) => {
            return(
                <div key={index} className={styles.Explanation}>
                    <div className={styles.word_type_wrapper}>
                        <h1 className={styles.word_type}>Synonyms</h1>
                        <div className={styles.section_line}></div>
                    </div>
                    <ul className={styles.definition_list}>
                        {synonym.synonyms.map((syn, index) => {
                            return(
                                <li key={index} className={styles.definition}>
                                    <p>{capitalizeWord(syn)}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        )} */}
        {/* <div className = {styles.Explanation}>
            <div className = {styles.word_type_wrapper}>
                <h1 className={styles.word_type}>noun</h1>
                <div className={styles.section_line}></div>
            </div>
            <h3 className={styles.meaning}>Meaning</h3>
            <ul></ul>

        </div> */}
        </> 
    );
}

export default Explanation;