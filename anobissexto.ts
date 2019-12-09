function anoBissexto(ano : number): boolean{
    if (ano%4 == 0){
        if (ano % 100 == 0){
            if (ano % 400 == 0){
                return: true;
            }
            else {
                return: false;
            }
        }
        else{
            return: true;
        }
    }
}

console.log("ano 2000 "+ehBissexto(2000));