import { Selector } from 'testcafe';
import { testCases } from './testcases.js';


fixture('Vehicle Insurance Applikations - Test')
    .page('https://sampleapp.tricentis.com/101/index.php');

    const linkToFormPage = Selector('header a').withText('Automobile');

    //Variablen
    const todayDatM3y = new Date();
    const dateMinus3Years = new Date(todayDatM3y.setFullYear(todayDatM3y.getFullYear() - 3));
    const dM3ymm = String(dateMinus3Years.getMonth() + 1).padStart(2, '0');
    const dM3ydd = String(dateMinus3Years.getDate()).padStart(2, '0');
    const dM3yyyyy = dateMinus3Years.getFullYear();
    const formattedDatedM3y = `${dM3ymm}/${dM3ydd}/${dM3yyyyy}`;
    
    const todayDatM10y = new Date();
    const dateMinus10Years = new Date(todayDatM10y.setFullYear(todayDatM10y.getFullYear() - 3));
    const dM10ymm = String(dateMinus10Years.getMonth() + 1).padStart(2, '0');
    const dM10ydd = String(dateMinus10Years.getDate()).padStart(2, '0');
    const dM10yyyyy = dateMinus10Years.getFullYear();
    const formattedDatedM10y = `${dM10ymm}/${dM10ydd}/${dM10yyyyy}`;
    
    const todayDatP1M1D = new Date();
    const datePlus1M1DYears = new Date(todayDatP1M1D);
    datePlus1M1DYears.setMonth(datePlus1M1DYears.getMonth() + 1);
    datePlus1M1DYears.setDate(datePlus1M1DYears.getDate() + 1);
    const dP1M1Dmm = String(datePlus1M1DYears.getMonth() + 1).padStart(2, '0');
    const dP1M1Ddd = String(datePlus1M1DYears.getDate()).padStart(2, '0');
    const dP1M1Dyyyyy = datePlus1M1DYears.getFullYear();
    const formattedDatedDP1M1D = `${dP1M1Dmm}/${dP1M1Ddd}/${dP1M1Dyyyyy}`;
    
    const todayDatP2M1D = new Date();
    const datePlus2M1DYears = new Date(todayDatP2M1D);
    datePlus2M1DYears.setMonth(datePlus2M1DYears.getMonth() + 2);
    datePlus2M1DYears.setDate(datePlus2M1DYears.getDate() + 1);
    const dP2M1Dmm = String(datePlus2M1DYears.getMonth() + 1).padStart(2, '0');
    const dP2M1Ddd = String(datePlus2M1DYears.getDate()).padStart(2, '0');
    const dP2M1Dyyyyy = datePlus2M1DYears.getFullYear();
    const formattedDatedDP2M1D = `${dP2M1Dmm}/${dP2M1Ddd}/${dP2M1Dyyyyy}`;
    
    // Form Page #1
    const makeSelect = Selector('#make');
    const makeOption = makeSelect.find('option');
    
    const engineperformance = Selector('#engineperformance');
    const dateofmanufacture = Selector('#dateofmanufacture');
    const numberofseats = Selector('#numberofseats');
    const numberofseatsOptions = numberofseats.find('option');
    
    const fuel = Selector('#fuel');
    const fuelOptions = fuel.find('option');
    
    const listprice = Selector('#listprice');
    const annualmileage = Selector('#annualmileage');
    const nextenterinsurantdata = Selector('#nextenterinsurantdata');
    
    // Form Page #2 - Enter Insurant Data
    const firstname = Selector('#firstname');
    const lastname = Selector('#lastname');
    const birthdate = Selector('#birthdate');
    
    const gendermaleRadio = Selector('#gendermale');
    const gendermaleLabel = gendermaleRadio.parent('label');
    
    const genderfemaleRadio = Selector('#genderfemale');
    const genderfemaleLabel = genderfemaleRadio.parent('label');
    
    const countrySelect = Selector('#country');
    const countryOption = countrySelect.find('option');
    
    const zipcode = Selector('#zipcode');
    
    const occupationSelect = Selector('#occupation');
    const occupationOption = occupationSelect.find('option');
    
    const hobbieSpeedingCheckbox = Selector('#speeding');
    const hobbieSpeedingLabel = hobbieSpeedingCheckbox.parent('label');
    
    const nextenterproductdata = Selector('#nextenterproductdata');
    
    // Form Page #3 - Enter Product Data
    const startdate = Selector('#startdate');
    
    const insuranceSumSelect = Selector('#insurancesum');
    const insuranceSumOption = insuranceSumSelect.find('option');
    
    const meritratingSelect = Selector('#meritrating');
    const meritratingOption = meritratingSelect.find('option');
    
    const damageinsuranceSelect = Selector('#damageinsurance');
    const damageinsuranceOption = damageinsuranceSelect.find('option');
    
    const europrotectionCheckbox = Selector('#EuroProtection');
    const europrotectionLabel = europrotectionCheckbox.parent('label');
    
    const legaldefenseinsuranceCheckbox = Selector('#LegalDefenseInsurance');
    const legaldefenseinsuranceLabel = legaldefenseinsuranceCheckbox.parent('label');
    
    const courtesycarSelect = Selector('#courtesycar');
    const courtesycarOption = courtesycarSelect.find('option');
    
    const nextselectpriceoption = Selector("#nextselectpriceoption");
    
    
    // Form Page #4 - Price
    const selectsilver_price = Selector('#selectsilver_price');
    const selectgold_price = Selector('#selectgold_price');
    const selectplatinum_price = Selector('#selectplatinum_price');
    const selectultimate_price = Selector('#selectultimate_price');
    
    const selectsilverRadio = Selector('#selectsilver');
    const selectsilverLabel = selectsilverRadio.parent('label');
    
    const nextsendquoteButton = Selector('#nextsendquote');
    
    // Form Page #5 - Send Quote
    const email = Selector('#email');
    const username = Selector('#username');
    const password = Selector('#password');
    const confirmpassword = Selector('#confirmpassword');
    const sendemail = Selector("#sendemail");
    const confirmEmailSendBox = Selector('.sweet-alert');
    const confirmEmailSendH2 = confirmEmailSendBox.find('h2');


    function ageToDateOfBirth(age) {
        const today = new Date();

        const birthday = new Date(
            today.getFullYear() - age,
            today.getMonth(),
            today.getDate()
        );
      
        birthday.setDate(birthday.getDate() - 1);
      
        const month = String(birthday.getMonth() + 1).padStart(2, '0');
        const day = String(birthday.getDate()).padStart(2, '0');
        const year = birthday.getFullYear();
      
        return `${month}/${day}/${year}`;
      }

for (const tc of testCases) {

    var dateOfManufatoreUsage = "dateMinus3years";
    if(tc.dateOfManufactor === "dateMinus3years"){
        dateOfManufatoreUsage = formattedDatedM3y;
    }else if (tc.dateOfManufactor === "dateMinus10Years"){
        dateOfManufatoreUsage = formattedDatedM10y;
    }

    var dateOfPrefStartUsage = "dateMinus3years";
    if(tc.startDate === "startDatePlus1M1D"){
        dateOfPrefStartUsage = formattedDatedDP1M1D;
    }else if (tc.startDate === "startDatePlus2M1D"){
        dateOfPrefStartUsage = formattedDatedDP2M1D;
    }

// Form Page #1 - Enter Vehicle Data
const makeSelect = Selector('#make');
const makeOption = makeSelect.find('option');

const engineperformance = Selector('#engineperformance')
const dateofmanufacture = Selector('#dateofmanufacture')
const numberofseats = Selector('#numberofseats')
const numberofseatsOptions = numberofseats.find('option');

const fuel = Selector('#fuel')
const fuelOptions = fuel.find('option');

const listprice = Selector('#listprice')
const annualmileage = Selector('#annualmileage')
const nextenterinsurantdata = Selector('#nextenterinsurantdata')

// Form Page #2 - Enter Insurant Data
const firstname = Selector('#firstname')
const lastname = Selector('#lastname')
const birthdate = Selector('#birthdate')

const gendermaleRadio = Selector('#gendermale');
const gendermaleLabel = gendermaleRadio.parent('label');

const genderfemaleRadio = Selector('#genderfemale');
const genderfemaleLabel = genderfemaleRadio.parent('label');

const countrySelect = Selector('#country');
const countryOption = countrySelect.find('option');

const zipcode = Selector('#zipcode')

const occupationSelect = Selector('#occupation');
const occupationOption = occupationSelect.find('option');

const hobbieSpeedingCheckbox = Selector('#speeding');
const hobbieSpeedingLabel = hobbieSpeedingCheckbox.parent('label');

const nextenterproductdata = Selector('#nextenterproductdata')

// Form Page #3 - Enter Product Data
const startdate = Selector('#startdate')

const insuranceSumSelect = Selector('#insurancesum');
const insuranceSumOption = insuranceSumSelect.find('option')

const meritratingSelect = Selector('#meritrating');
const meritratingOption = meritratingSelect.find('option')

const damageinsuranceSelect = Selector('#damageinsurance');
const damageinsuranceOption = damageinsuranceSelect.find('option')

const europrotectionCheckbox = Selector('#EuroProtection');
const europrotectionLabel = europrotectionCheckbox.parent('label');

const legaldefenseinsuranceCheckbox = Selector('#LegalDefenseInsurance');
const legaldefenseinsuranceLabel = legaldefenseinsuranceCheckbox.parent('label');

const courtesycarSelect = Selector('#courtesycar');
const courtesycarOption = courtesycarSelect.find('option')

const nextselectpriceoption = Selector("#nextselectpriceoption");



  test(`${tc.name}`, async t => {
    // Beispielhafte Eingaben
    await t

        // automatically dismiss dialog boxes
        .setNativeDialogHandler(() => true)

        //Navigate to Form page
        .click(linkToFormPage)

        //choose Make
        .click(makeSelect)
        .click(makeOption.withText(tc.make.toString()))

        // Engine performance
        .typeText(engineperformance, tc.enginePerformance.toString())

        // date of manufactor
        .typeText(dateofmanufacture, dateOfManufatoreUsage, { replace: true })

        // number of seats
        .click(numberofseats)
        .click(numberofseatsOptions.withText(tc.numerOfSeats.toString()))

        //fuel type
        .click(fuel)
        .click(fuelOptions.withText(tc.fuelType))


        //List price
        .typeText(listprice, tc.listPrice.toString(), { replace: true })

        // annual mileage
        .typeText(annualmileage, tc.annualMileage.toString(), { replace: true })

        //next button
        .click(nextenterinsurantdata)



        // PAGE #2
        .expect(firstname.exists).ok('Das Feld #firstname existiert nicht auf der neuen Seite.')

        .typeText(firstname, tc.firstName, { replace: true })
        .typeText(lastname, tc.lastname, { replace: true })

        .typeText(birthdate, dateOfBirth, { replace: true });

        if(tc.gender === "Female"){
            await t
                .click(genderfemaleLabel)
                .expect(genderfemaleRadio.checked).ok('Checkbox sollte ausgewählt sein');
        } else if(tc.gender === "Male"){
            await t
                .click(gendermaleLabel)
                .expect(gendermaleRadio.checked).ok('Checkbox sollte ausgewählt sein');
        }
 
    await t
        .click(countrySelect)
        .click(countryOption.withText(tc.country))

        .typeText(zipcode, tc.zipCode.toString(), { replace: true })

        .click(occupationSelect)
        .click(occupationOption.withText(tc.occupation))

        .click(hobbieSpeedingLabel)
        .expect(hobbieSpeedingCheckbox.checked).ok('Checkbox sollte ausgewählt sein')

        .click(nextenterproductdata)

        // PAGE #3 - Enter Product Data
        .expect(startdate.exists).ok('Das Feld #startdate existiert nicht auf der neuen Seite.')

        .typeText(startdate, dateOfPrefStartUsage, { replace: true })

        .click(insuranceSumSelect)
        .click(insuranceSumOption.withText(tc.insuranceSum))

        .click(meritratingSelect)
        .click(meritratingOption.withText(tc.meritRating))

        .click(damageinsuranceSelect)
        .click(damageinsuranceOption.withText(tc.damageInsurance));

    //Euro Protection Checkbox
    if(tc.optionalEuroProtection){
        await t
            .click(europrotectionLabel)
            .expect(europrotectionCheckbox.checked).ok('Checkbox sollte ausgewählt sein');
    }

    //Legal Defense Insurance Checkbox
    if(tc.optionalLegalDefenseInsurance){
        await t
            .click(legaldefenseinsuranceLabel)
            .expect(legaldefenseinsuranceCheckbox.checked).ok('Checkbox sollte ausgewählt sein')
    }

    await t

        .click(courtesycarSelect)
        .click(courtesycarOption.withText(tc.courtesyCar))
        
        // next Step Button
        .click(nextselectpriceoption)



        // PAGE #4 - Price Plan

        .expect(selectsilver_price.exists).ok('Das Feld #selectsilver_price existiert nicht auf der neuen Seite.')

        .expect(selectsilver_price.innerText).eql(tc.priceSilver, "Preis Silver passt nicht")

        .expect(selectgold_price.innerText).eql(tc.priceGold, "Preis Gold passt nicht")

        .expect(selectplatinum_price.innerText).eql(tc.pricePlatinum, "Preis Platinum passt nicht")

        .expect(selectultimate_price.innerText).eql(tc.priceUltimate, "Preis Ultimate passt nicht")


        .click(selectsilverLabel)
        .expect(selectsilverRadio.checked).ok('Checkbox Silver sollte ausgewählt sein')

        .click(nextsendquoteButton)

        // PAGE 5 - Send quote

        .expect(email.exists).ok('Das Feld #selectsilver_price existiert nicht auf der neuen Seite.')

        .typeText(email, tc.email, { replace: true })
        .typeText(username, tc.username, { replace: true })
        .typeText(password, tc.password, { replace: true })
        .typeText(confirmpassword, tc.passwordConfirm, { replace: true })

        .skipJsErrors()
        .click(sendemail)
        .skipJsErrors(false)

        

        .expect(confirmEmailSendBox.exists).ok('Das Feld #confirmEmailSendBox existiert nicht auf der Seite.', { timeout: 15000 })
        .expect(confirmEmailSendBox.visible).ok('ConfirmBox sollte sichtbar sein')
        .expect(confirmEmailSendH2.innerText).eql('Sending e-mail success!', 'Der Text in der Überschrift stimmt nicht');

  });
}
