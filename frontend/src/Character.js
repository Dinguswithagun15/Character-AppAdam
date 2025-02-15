export default class Character{
    // creates a new character with default stats
    constructor(name){
        this.id=crypto.randomUUID()
        this.char_name=name
        this.char_level=1
        this.class=""
        this.background=""
        
        this.strength=0
        this.dexterity=0
        this.constitution=0
        this.inteligence=0
        this.wisdom=0
        this.charisma=0

        this.acrobatics=0
        this.animalHandling=0
        this.arcana=0
        this.athletics=0
        this.deception=0
        this.history=0
        this.insight=0
        this.intimidation=0
        this.investigation=0
        this.medicine=0
        this.nature=0
        this.perception=0
        this.performance=0
        this.persuation=0
        this.religion=0
        this.sleightOfHand=0
        this.stealth=0
        this.survival=0
        
        this.max_hp=10
        this.current_hp=10
        this.temp_hp=0
        this.hit_dice_type="d8"
        this.hit_dice_count=1

        this.proficiency_bonus=2
        this.ac=10
        this.speed=30
        this.initiative=0

        this.deathsave_success=0
        this.deathssaves_fail=0
        
        this.inventory=""
        this.proficiences="common,dagger"
        
        this.actions=[{
            id:crypto.randomUUID,
            title:"Unarmed Strike",
            bonusOrDC:2,
            range:"5ft",
            damage:1,
            notes:""
        }]
        
        this.features=[{
            id:crypto.randomUUID,
            title:"Feature Title",
            description:"Add all your new features here"
        }]
    }

    /* method to return a string query that will insert
    /  the character into the db */
    getInsertQuery(userId){
        return `INSERT INTO Characters VALUES (` +
        `'${this.id}','${this.name}','${this.charClass}',${this.level},'${this.background}',` +
        `${this.str},${this.dex},${this.con},${this.int},${this.wis},${this.cha},` +
        `${this.acrobatics},${this.animalHandling},${this.arcana},${this.athletics},` +
        `${this.deception},${this.history},${this.insight},${this.intimidation},` +
        `${this.investigation},${this.medicine},${this.nature},${this.perception},` +
        `${this.performance},${this.persuation},${this.religion},${this.sleightOfHand},` +
        `${this.stealth},${this.survival},` +
        `${this.maxHp},${this.currentHp},${this.tempHp},` +
        `'${this.hitDiceType}',${this.hitDiceCount},${this.proficiencyBonus},${this.ac},` +
        `${this.speed},${this.initiative},${this.deathSavesSuccess},${this.deathSavesfails},` +
        `'${this.inventory}','${this.proficiences}','${userId}')`
    }
}