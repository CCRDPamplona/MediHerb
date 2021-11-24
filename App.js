import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Button, TouchableHighlight, ScrollView, } from "react-native";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';


const Menus = [
  {
    url: "https://i.imgur.com/BeqqxJw.jpg",
    menuTitle: "BANABA",
    menuDesc:
      "Lagerstroemia speciosa (Banaba) leaves have been traditionally used for treating diabetes and kidney diseases. Scientific evidences support its anti-diabetic property since it contains triterpene acids (oleanolic acid, arjunolic acid, asiatic acid, maslinic acid, corosolic acid, and 23-hydroxyursolic acid) that have α-glucosidase and α-amylase inhibitory activity. Among these, corosolic acid was observed to have the best α-glucosidase inhibition. Corosolic acid was also found to exhibit antihyperlipidemic, antioxidant, anti-inflammatory, antifungal, antiviral, antineoplastic and osteoblastic activities. Lagerstroemin, an ellagitannin, and Penta-O-galloyl-glucopyranose, a potent gallotannin, are two compounds also isolated from banaba leaf extracts wherein both have insulin-like glucose transport stimulatory activity and exhibit anti-adipogenic properties. Additionally, other compounds such as valoneic acid dilactone and ellagic acid from banaba leaves possess xanthine oxidase inhibitory activity making it useful for hyperuricemia or gout.",
  },
  
   {
    url: "https://i.imgur.com/YDRlTfW.jpg",
    menuTitle: "SAMBONG",
    menuDesc:
      "Blumea balsamifera (Sambong) contains sesquiterpenes identified as blumeaenes and samboginone, and antioxidant flavonoids such as blumeatin, quercetin, rhamnetin, tamarixetin, and luteolin. The volatile oil obtained from Sambong consists of camphor, borneol, isoborneol, terpineol, caryophyllene, guaiol, and eugenol. Sambong displays a variety of biological activities such as antitumor, hepatoprotective, antioxidant, antimicrobial, anti-inflammatory, anti-melanogenic, platelet aggregation, wound healing, and anti-obesity properties. It is used as herbal treatment for kidney stones, cuts or wounds, rheumatism, diarrhea, spasms, colds, coughs, and hypertension. The Philippine Council for Health Research and Development has even developed the technology for sambong herbal medicine tablets particularly for anti-urolithiatic purposes which have been available in the market for such indication. Consumption of Sambong tea or leaf infusion can also help dissolve kidney stones and prevent urolith formation.",
  },
  {
    url: "https://i.imgur.com/g5zXeSI.jpg",
    menuTitle: "LAGUNDI",
    menuDesc:
      "Vitex negundo (Lagundi) contains antioxidant phenolic compounds and flavonoids such as casticin, chrysoplenol D, luteolin, iso-orientin, and luteolin-7-0-glucoside. Other compounds such as epicatechin, quercetin, catechin, myricetin, tocopherol, β-carotene and lycopene were also found to be present in lagundi leaf extracts. Chrysoplenol D was identified as the bioactive substance having anti-histaminergic and muscle relaxant properties particularly useful for cough and asthma.  Lagundi is also used for the treatment colds, fever, flu, chronic bronchitis, pharyngitis, rheumatism, dyspepsia, boils, diarrhea, and certain skin or digestive complaints. Primarily it is recognized as herbal medicine for respiratory problems.",
  },
   
  {
    url: "https://i.imgur.com/YynrnN8.jpeg",
    menuTitle: "SALUYOT",
    menuDesc:
     "Corchorus olitorius (Saluyot) is rich in polyphenolic antioxidants, flavonoids, saponins, tannins, steroids, triterpenes, vitamins, and minerals. Studies show that the leaf extract possesses inhibitory activity towards α-amylase, α-glucosidase, and angiotensin I converting enzyme (ACE) thus making it useful to combat diabetes and high blood pressure. Such enzyme inhibitory activities are attributed to the presence of specific compounds called caffeic acid, chlorogenic acid, and isorhamnetin.",
  },
  {
    url: "https://i.imgur.com/YK5sxgU.jpeg",
    menuTitle: "SILI",
    menuDesc:
     "Capsicum fructescens (Sili) is a rich source of antioxidants, alkaloids, flavonoids, polyphenols, carotenoids, vitamin C, and vitamin E. Capsaicin is the predominant compound present in cayenne pepper that possesses pain desensitization and analgesic property that is useful for chronic pain associated with rheumatoid arthritis, post-herpetic neuralgia, diabetic neuropathy, and other pain syndromes. It also has anti-inflammatory, bactericidal, antifungal, and anti-diabetic properties.",
  },
  {
    url: "https://i.imgur.com/3HGFcy3.jpeg",
    menuTitle: "TAWA-TAWA",
    menuDesc:
     "Euphorbia hirta (Tawa-tawa) is also called Gatas-gatas because of the healing properties of its milky juice. It contains contain triterpenes, phytosterols, tannins, polyphenols, and flavonoids.  This herb has gained widespread attention because of its ability to help patients recover from dengue. Folk wisdom regard it as a hemostatic, which may help explain why blood platelets increase after ingestion of a boiled decoction of the plant",

  },
  {
    url: "https://i.imgur.com/Av0kWIz.jpeg",
    menuTitle: "OREGANO",
    menuDesc:
     "Origanum vulgare (Philippine Oregano) contains rosmarinic acid, ursolic acid, thymol, and carvacrol that have anti-inflammatory, antibacterial, antioxidant, antifungal and antiviral properties. Oregano also consists of flavonoids, triterpenoids, vitamins, and minerals. One of its constituents called origanoside was found to have tyrosinase inhibiting activity which suggests that it helps decreases melanin production and may be used for skin whitening purposes. Oregano oil and tea are particularly used for antibacterial and immune system enhancing effect. Oregano has been traditionally used to treat respiratory, gastrointestinal, menstrual, and urinary tract disorders. Topical application has been employed for dandruff and acne.",
  },
  {
    url: "https://i.imgur.com/gx0D48y.png",
    menuTitle: "DALANDAN",
    menuDesc:
     "Citrus aurantium (Dalandan) is rich in vitamin C and bioflavonoids that have antioxidant and immunoboosting activities.Two particular flavonoids, naringenin and hesperetin, were reported to have anti-inflammatory and anti-atherogenic acivities. They also help regulate glucose and lipid metabolism. Dalandan’s limonene content possesses gastroprotective properties. Dalandan essential oil has antimicrobial, anxiolytic, sedative, and gastroprotective properties.",
  },
  {
    url: "https://i.imgur.com/KW5DleC.jpg",
    menuTitle: "LUYANG DILAW",
    menuDesc:
      "Curcuma longa (Turmeric) contains curcuminoids (natural vibrant yellow pigments) which include curcumin, demethoxycurcumin, and bisdemethoxycurcumin. Turmeric also contains volatile oils (turmerone, atlantone, and zingiberone). Extensive research and clinical trials indicate that curcumin, the primary bioactive constituent of turmeric, is a powerful natural antioxidant and anti- inflammatory that leads to the improvement of cardiovascular health, digestive health, brain, liver, lung, and kidney function, joint inflammation suppression, allergy prevention, reduction of high blood sugar and lipids, strengthening the immune system, and cancer prevention. Curcumin has been found to have potential as a therapeutic agent in diseases such as inflammatory bowel disease, pancreatitis, arthritis, and chronic anterior uveitis as well as certain types of cancer."
  },
  {
    url: "https://i.imgur.com/iNHXyOX.jpg",
    menuTitle: "MALUNGGAY",
    menuDesc:
      "Moringa oleifera (Malunggay), often referred to as the 'Miracle Tree', contains a great profile of important vitamins, minerals, and serves as a good source of protein, β-carotene, amino acids and various antioxidant phenolic molecules. Moringa consists of a rich and rare combination of zeatin, quercetin, β-sitosterol, caffeoylquinic acid and kaempferol. Numerous studies demonstrate that Moringa possesses a variety of amazing health benefits such as improving cardiac and circulatory function, having antioxidant, anti-inflammatory, anti-tumor, anti-epileptic, antipyretic, anti-ulcer, antispasmodic, and diuretic properties. Moringa also possesses antihypertensive, cholesterol lowering, anti-diabetic, hepatoprotective, antibacterial and antifungal activities."
  },
  {
    url: "https://i.imgur.com/YApGKFk.jpg",
    menuTitle: "LUYA",
    menuDesc:
      "Zingiber officinale (Ginger) rhizome extracts consist of phenylalkylketones or vanillyl ketones which include gingerol, shogaol, paradol, dehydrogingerdione, and gingerdione. However, gingerol and shogaol are the primary phytoconstituents providing the greatest bioactivity. They are reported to demonstrate antiemetic, antipyretic, analgesic, anti-arthritic, immunomodulatory, and anti-inflammatory activities.",
  },
  {
    url: "https://i.imgur.com/SP4vT4r.jpeg",
    menuTitle: "TANGLAD",
    menuDesc:
      "Cymbopogon citratus (Lemongrass) is good for digestion and is popularly used to treat digestive problems or stomachache due to constipation, bloating, or indigestion. It is rich in vitamins, minerals, and phytoconstituents such as flavonoids and phenolic compounds, which consist of luteolin, isoorientin 2’-O-rhamnoside, quercetin, kaempferol, and apiginin. The phytoconstituents identified in lemongrass essential oils that contain Citral α, Citral β, Nerol Geraniol, Citronellal, Terpinolene, Geranyl acetate, Myrecene, and Terpinol Methylheptenone. The essential oil has antimicrobial, antinociceptive/analgesic, insect repellent, and digestion-improving properties. Studies show that citral which is present in lemongrass inhibits the growth of cancer cells."
  },

  {
    url: "https://i.imgur.com/pzNBygY.jpeg",
    menuTitle: "BIGNAY",
    menuDesc:
      "Antidesma bunius (Bignay) is rich in vitamins, minerals, and health-benefitting phytochemicals. Bignay is a traditional herbal remedy for diabetes and gastrointestinal problems. Studies show that bignay consists of compounds such as alkaloids, terpenes, saponins, tannins, glycosides, and flavonoids having α-glucosidase inhibitory activity which supports its antidiabetic claim. Its phenolic, flavonoid, anthocyanin, and carotenoid content possess antioxidant properties that help improve overall health.",
  },

  {
    url: "https://i.imgur.com/MdDFAoF.jpeg",
    menuTitle: "BALBAS PUSA",
    menuDesc:
      "Orthosiphon stamineus (Cat’s Whiskers) is commonly used to treat renal inflammation, kidney stones, and dysuria. It contains antioxidant compounds like rosmarinic acid, beta-sitosterol, ursolic acid, glycolic acid, methylripariochromene A, bioflavonoids, and oleanolic acid. Methylripariochromene A present in the herb could decrease systolic blood pressure. Rosmarinic acid and methylated flavonoids are found in large amounts in this herb. Rosmarinic acid is a general antioxidant and anti-inflammatory compound. Methylated flavonoids have properties that combat cancer, oxidant stress, pathogenic bacteria, inflammations, cardio-vascular dysfunctions, and other diseases.",
  },

  {
    url: "https://i.imgur.com/9ceuS1A.jpg",
    menuTitle: "ROSEL",
    menuDesc:
      "Hibiscus sabdariffa (Roselle) is rich in vitamins, minerals, and bioactive polyphenolic compounds such as flavonols and anthocyanins (natural red pigments) which are supported by scientific studies to have impressive antioxidant properties, effective in reducing blood pressure and aid in blood glucose control. Protocatechuic acid present in Roselle was also found to have antiviral, antibacterial, antioxidant and antitumor activity. It also contains hibiscus acid that has appetite suppressing effects and thus supports weight loss.",
  },
];
const Members = [
  {
    id:1, 
    url: "https://i.imgur.com/ruSWx0v.jpg" ,
    name: "John Carlo Chan",
    memberDesc: "DEVELOPER"
  },

  {
    id:2, 
    url: "https://i.imgur.com/TTL6mKP.png" , 
    name: "Jay-r Zacarias",
    memberDesc: "PPT & DOCUMENT"
  },
  
  {
    id:3, 
    url: "https://i.imgur.com/3w5vT23.jpeg" , 
    name: "Clinton Pamplona",
    memberDesc: "INITIAL APP"
  },

];



/*Homescreen Component*/
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/bg.jpg")}
        style={styles.imageBG}
      >
      
        <View style={[styles.rowCenter, { marginTop: -150 }]}>
          <Image style={styles.logo} source={require("./assets/logo.jpg")} />
        </View>
       
        <Text style={styles.mdhrb}>MEDIHERB</Text>

        <View style={styles.rowCenter}>
          <View style={{width: 200,
                height: 45,
                marginTop: 250, }}>
            <Button
              title="HERBALS"
              color="#95A55F"
              onPress={() => navigation.navigate("HERBALS")}
            />
         
          </View>
        </View>

        <View style={styles.rowCenter}>
          <View style={{width: 150,
                height: 45,
                marginTop: 15, }}>
            <Button
              title="About us"
              color="#95A55F"
              onPress={() => navigation.navigate("About")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

/*Herbs Details Component*/
function MenuDetail(props) {
  return (
     <ScrollView style={styles.menuDetailContainer}>
     <View>
        <Image style={styles.herbImage} source={{ uri: props.route.params.url}} />
      </View>

      <View style={styles.contentRound}>
      
        <Text style={styles.contentDesc}>{props.route.params.menuDesc}</Text>
      </View>

     </ScrollView>
  );
}

/*List Component*/
function MenuScreen({ navigation }) {
  return (
    <ScrollView>
      {Menus.map((menu, key) => (
        <View key={key} style={{ flexDirection: "row" }}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#ecf0f1"
            onPress={() => navigation.navigate(menu.menuTitle)}
          >
            <View style={styles.cardRounded}>
              <Image style={styles.cardImage} source={{ uri: menu.url }} />
              <View style={{ flexDirection: "row", alignContent: "flex-end" }}>
                
              </View>
              <Text style={styles.menuTitle}>{menu.menuTitle}</Text>
              
            </View>
          </TouchableHighlight>
        </View>
      ))}
    </ScrollView>
  );
}
/* About Component */
function AboutScreen({ navigation }) {
  return (
    <ScrollView>
      {Members.map((members, key) => (
        <View key={key} style={{ flexDirection: "row", backgroundColor: "#ecf0f1"}} >
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#ecf0f1"
          >
            <View>
            <View style={styles.cardRoundedMember}>
              <Image style={styles.cardImageMember} source={{ uri: members.url }} />
              <Text style={styles.menuTitle}>{members.name}</Text>
              <Text style={{color: "white", textAlign: "center"}}>
                {members.memberDesc}
              </Text>
            </View>
            </View>

          </TouchableHighlight>
        </View>
      ))}
    </ScrollView>
  );
}


/*Main Component*/
const Stack = createStackNavigator(); 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#95A55F",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >


        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="HERBALS" component={MenuScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        
		
		
        {Menus.map((menu, key) => (
          <Stack.Screen
            key={key}
			
            initialParams={{
              url: menu.url,
              menuTitle: menu.menuTitle,
              menuDesc: menu.menuDesc,
            }}
            name={menu.menuTitle}
            component={MenuDetail}
          />
        ))}
	
		
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*Custom Styling*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  mdhrb: {
    margin: 12,
    fontSize: 30,
    fontWeight: "bold",
    color: "#95A55F",
    textAlign: "center",
    fontFamily: "Roboto",
  },


  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  

  btnRounded: {

    borderRadius: 10,
    margin:5
  },

  cardRounded: {
    height: 270,
    backgroundColor: "#95A55F",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  cardImage: {
    width: 363,
    height: 180,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },

  menuTitle: {
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Roboto",
    marginTop: 15,
  },

  menuDesc: {
    paddingLeft: 12,
    paddingRight: 12,
  },
 
  contentTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#006400",
    fontFamily: "Roboto",
    marginTop: 5,
  },

  contentDesc: {
    fontSize: 15,
    textAlign: "justify",
    color: "#000",
    fontFamily: "serif",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    
  },

  menuDetailContainer: {
    backgroundColor: "#edfaef",
  }, 
  herbImage: {
    width: 363,
    height: 200,
    borderRadius: 12,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 18,

  },

  cardRoundedMember: {
    height: 300,
    width: 350,
    backgroundColor: '#95A55F',
    marginLeft: 20,
    marginRight: 15,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 12,
  },

  cardImageMember: {
    width: 350,
    height: 220,
    
  },


  cardImage: {
    width: 370,
    height: 200,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  }
});
