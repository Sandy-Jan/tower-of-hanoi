function toh(disc:number,source:string,destination:string,helper:string){
      if(disc == 0){ return }

      toh(disc-1,source,helper,destination)
      console.log(`disc ${disc} move from ${source} to ${destination} .`);
      toh(disc-1,helper,destination,source)
      

}
toh(4,"A","B","C")