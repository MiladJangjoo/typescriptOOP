abstract class RpgGame {
    abstract attack():void
    abstract defence():void
    collectGold():void{console.log('i can collect gold')}
    fightingStyle():void{}
}

class Orges extends RpgGame {
    override attack():void{console.log('attack with club')}
    override defence():void{console.log('defence with a sheild')}
    fightingStyle():void{}
}

class Peons extends RpgGame {
    override attack():void{console.log('attack with club')}
    override defence():void{console.log('defence with a sheild')}
    fightingStyle():void{}
}

class Knights extends RpgGame {
    override attack():void{console.log('attack with a sword')}
    override defence():void{console.log('defence with arrow')}
    fightingStyle():void{}
}

class Archer extends RpgGame {
    override attack():void{console.log('attack with a bow and arrow')}
    override defence():void{console.log('defence with a tunic')}
   fightingStyle():void{}
}