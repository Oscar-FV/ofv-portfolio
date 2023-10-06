export default interface job{
    company: string,
    jobTitle: string, 
    dateStart: Date,
    dateEnd?: Date,
    jobLocation: string,
    stack: string[],        //name of the technologies used in the job
    iconStack: string[],    //name of the icon in fontAwesome
    descritpion: string
}