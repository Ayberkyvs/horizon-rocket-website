import { languages } from "../../data/data"

export default function langdataselector(language: string){
    if (language === "turkish") {
        return languages.tr
    }else {
        return languages.en
    }
}