enum CustomerType {
    Standard,
    Premium,
    VIP
}

function oneMoreWelcomFunction(name: string, ct: CustomerType){
    if (ct === CustomerType.VIP)
    console.log(`Welcome, ${name}!`)
}

console.log(CustomerType.Premium) 
// to pozwala na sprawdzenie którym elementem w CustomerType jest Premium.
//numerowanie elementów odbywa się automatycznie ale gdybyśmy napisali:
//enum CustomerType {
//    Standard = 7,
//    Premium,
//    VIP
//}
//wówczas Premium przyjęłoby nr 8 a VIP nr 9

console.log(CustomerType[CustomerType.Premium])
//wyloguje element o indexie Premium czyli w tym przypadku Premium)