export const getSavedStorage = (name) => {
    let savedData:any = localStorage.getItem("reAutoSave");
    savedData ? (savedData = JSON.parse(savedData)) : "";
    return savedData && savedData[name] ? savedData[name]:''
}