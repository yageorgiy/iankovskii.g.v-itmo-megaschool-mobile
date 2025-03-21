
const extractDocuments = async (data: any) => {
    return Object.keys(data?.documents).filter(key => {
        return (key !== "facets");
    }).map((index: any) => {
        let item = data?.documents[index];
        return item;
    });
};

export const getNews = async (term: string, setData: any, setLoading: any) => {
  try {
    setLoading(true);
    console.log("Requesting...");
    const response = await fetch(
        `${MOUNTPOINT}/wds?format=json&qterm=${term}&display_title=water&fl=display_title&rows=4&os=20`, 
    );
    const json = await response.json();
    
    setData(json);
  } catch (error) {
    console.error(error);

    const fallbackData = {
        "rows": 2,
        "os": 20,
        "page": 11,
        "total": 5591,
        "documents": {
          "D27760602": {
            "id": "27760602",
            "entityids": {
              "entityid": "090224b084deb749_1_0"
            },
            "abstracts": {
              "cdata!": "Central Asia (CA) was impacted adversely by significant economic shocks during 2015. The region experienced a series of external shocks from late 2014 through 2015, including a sharp drop in commodity prices (particularly for oil and metals), a significant slowdown in major trading partners, (especially Russia), and a loss in competitiveness due to an increase in the value of the U.S. dollar, against which many countries manage their currencies, and a decline in the value of the Russian ruble. At the end of 2015, the region's 2016 growth rate was expected to be around 3.96 percent – the second lowest since independence. This period of recent economic hardship – coupled with fragile poverty gains and a lack of consensus on regional resource management – poses significant challenges for continuing regional development. Recent gains and progress on poverty reduction have slowed down; for example in Uzbekistan national poverty rate declined from 14.1 percent in 2013 to 13.7 percent in 2014 and an estimated 13.6 percent in 2015; in Kazakhstan progress on poverty reduction largely stalled due to slow growth and a weak labor market; the situation is similar in the other Central Asian countries. Progress on poverty reduction in the region remains vulnerable to external shocks. In addition, the harsh climatic conditions and associated higher costs for heating, clothing and shelter pose severe challenges to the regional poor. A lack of consensus among CA states on transboundary water issues contribute to a situation in which recent regional political, socioeconomic and ecological achievements will remain fragile."
            },
            "display_title": "Central Asia Energy-Water Development Program : Annual Report 2015",
            "pdfurl": "http://documents.worldbank.org/curated/en/897641500381902357/pdf/112964-Russian-17-7-2017-13-40-32-WBCAEWDPruweb.pdf",
            "guid": "897641500381902357",
            "url": "http://documents.worldbank.org/curated/en/897641500381902357"
          },
          "D31052098": {
            "id": "31052098",
            "entityids": {
              "entityid": "090224b086c6014c_1_0"
            },
            "abstracts": {
              "cdata!": "Mainly due to and the resulting natural resource depletion, China has been aiming to improve energy efficiency, control energy consumption, and reduce pollutant discharges through a series of related policies China’s rapid economic development. The State Council emphasized the need to strengthen research, development and the promotion of energy saving through the application of new technologies, equipment, and materials.  These efforts were expected to speed up a transition to the use of energy saving technologies, adjust energy intensive industrial production structures, and reduce the number of high energy consumers in China. Since the late 1980s, thousands of municipal water supply plants (WSPs) and wastewater treatment plants (WWTPs) have been constructed in China to cope with rising water demand and wastewater generation.  Water supply and wastewater treatment facilities around the world consume significant amount of energy and contribute to large quantities of greenhouse gas (GHG) emissions. For water supply companies (WSCs), power consumption is mainly driven by the pumping required for water intake and water distribution. Another issue is the high levels of non-revenue water (NRW) of water lost through leaks, not billed, or inefficiently managed.  The development objectives of this Liaoning Safe and Sustainable Urban Water Supply Project funded by World Bank are to improve water quality and operational efficiency of selected water utilities in the project areas including development of a NRW reduction plan plus an energy saving plan, considering the existing and planned water supply expansion in Liaoning. The primary objectives of this Technical Assistance (TA) are to assist all of the WSCs to explore potential energy savings under the project, and also to function as a pilot or demonstration for others to learn or use as reference."
            },
            "display_title": "Energy Saving Management Action Plan for Liaoning Safe and Sustainable Urban Water Supply Project",
            "pdfurl": "http://documents.worldbank.org/curated/en/160841557312696509/pdf/Energy-Saving-Management-Action-Plan-for-Liaoning-Safe-and-Sustainable-Urban-Water-Supply-Project.pdf",
            "guid": "160841557312696509",
            "url": "http://documents.worldbank.org/curated/en/160841557312696509"
          },
          "facets": {}
        }
      };
    setData(await extractDocuments(fallbackData));
  } finally {
    setLoading(false);
  }
};

export const MOUNTPOINT = "https://search.worldbank.org/api/v3";

