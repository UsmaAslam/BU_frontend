import React,{ useEffect, useState} from 'react';
// npm install react-pdf-table
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from 'axios';
import {createStackNavigator} from 'react-navigation'
//Create styles
const styles = StyleSheet.create({
    container: {
      fontSize:'12',
      display:'flex',
      //margin: '2px',
      flexDirection:'row',
  },
    Description: {
      fontSize:'12',
      border:'solid',
      borderLeft:'0px',
      borderRight:'1px',
      borderBottom:'1px',
      borderTop:'1px'
    },
    MyRow:
    {
      border: '1px solid rgb(5, 5, 7)',
      backgroundColor: 'grey',
      width: '10%',
      fontSize: '12',
      padding:'px'
    }
   
  });      
                              
// const FormPdf=()=>(
//     <Document>
//       <Page size="A4">
//         <View>
//           <Text>Semester: </Text>
//           <Text>Degree: </Text>
//         </View>
//         <View style={styles.container}>
//          <Text style={styles.MyRow}> Course Content</Text>
//          <Text style={styles.Description}>
//             Introduction (Introduction, basic component of AI, Identifying AI systems, branches of
//             AI, etc.); Reasoning and Knowledge Representation (Introduction to Reasoning and
//             Knowledge Representation, Propositional Logic, First order Logic); Problem Solving by
//             Searching (Informed searching, Uninformed searching, Local searching.); Constraint
//             Satisfaction Problems; Adversarial Search (Min-max algorithm, Alpha beta pruning,
//             Game-playing); Learning (Unsupervised learning, Supervised learning, Reinforcement
//             learning) ;Uncertainty handling (Uncertainty in AI, Fuzzy logic); Recent trends in AI and
//             applications of AI algorithms (trends, Case study of AI systems, Analysis of AI systems)
//          </Text>
//         </View>
//         <View style={styles.container}>
        
//          <Text style={styles.MyRow}> Course Content</Text>
//          <Text style={styles.Description}>
//             Introduction (Introduction, basic component of AI, Identifying AI systems, branches of
//             AI, etc.); Reasoning and Knowledge Representation (Introduction to Reasoning and
//             Knowledge Representation, Propositional Logic, First order Logic); Problem Solving by
//             Searching (Informed searching, Uninformed searching, Local searching.); Constraint
//             Satisfaction Problems; Adversarial Search (Min-max algorithm, Alpha beta pruning,
//             Game-playing); Learning (Unsupervised learning, Supervised learning, Reinforcement
//             learning) ;Uncertainty handling (Uncertainty in AI, Fuzzy logic); Recent trends in AI and
//             applications of AI algorithms (trends, Case study of AI systems, Analysis of AI systems)
//          </Text>
//         </View>
//       </Page>
//     </Document>
// );
// export default FormPdf

export default function FormPdf() {
  const {navigation}=this.props;
  const courseId=navigation.getParam("id",'NO-ID' )
  const [item, setData] = useState(props.courseId);
  console.log(props.courseId)
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://127.0.0.1:5000/put_data',{ "id": id });
      setData(response.data);
      console.log(response.data)
    }
    fetchData();
  }, []);
  return (
    <Document>
      <Page size="A4">
        <View style={styles.container} key={JSON.stringify(item.rd_id)}>
          <Text style={styles.MyRow}>Course Title: </Text>
          <Text style={styles.Description}> {JSON.stringify(item.rd_crs_name)}</Text>
        </View>
        <View style={styles.container}key={JSON.stringify(item.rd_id)}>
          <Text style={styles.MyRow}>Course Code: </Text>
          <Text style={styles.Description}> {JSON.stringify(item.rd_crs_code)}</Text>
        </View>
        <View style={styles.container}key={JSON.stringify(item.rd_id)}>
          <Text style={styles.MyRow}>Course Hours: </Text>
          <Text style={styles.Description}> {JSON.stringify(item.rd_crs_hr)}</Text>
        </View>
        <View style={styles.container}key={JSON.stringify(item.rd_id)}>
          <Text style={styles.MyRow}>Degree: </Text>
          <Text style={styles.Description}> {JSON.stringify(item.rd_dept)}</Text>
        </View>
        <View style={styles.container}key={JSON.stringify(item.rd_id)}>
         <Text style={styles.MyRow}>Course Content: </Text>
         <Text style={styles.Description}> {JSON.stringify(item.rd_crs_outline)}</Text>
        </View>
        <View style={styles.container}key={JSON.stringify(item.rd_id)}>
         <Text style={styles.MyRow}>Text Book/s: </Text>
         <Text style={styles.Description}>{JSON.stringify(item.rd_crs_book)}</Text>
        </View>
      </Page>
    </Document>
  )
}


// const styles = StyleSheet.create({
//   // container: {
//   //     // flexDirection: 'row',
//   //     // borderBottomColor: '#bff0fd',
//   //     // backgroundColor: '#bff0fd',
//   //     // borderBottomWidth: 1,
//   //     // alignItems: 'center',
//   //     // height: 24,
//   //     // textAlign: 'center',
//   //     // fontStyle: 'bold',
//   //     // flexGrow: 1,
//   //     flexDirection: 'row',
//   //     borderBottomColor: '#bff0fd',
//   //     borderBottomWidth: 1,
//   //     alignItems: 'center',
//   //     height: 24,
//   //     fontStyle: 'bold',
//   //     color: 'white'    
//   // },
//   container: {
//     flexDirection: 'row',
//     // borderBottomColor: '#bff0fd',
//     // backgroundColor: '#bff0fd',
//     // borderBottomWidth: 1,
//     // alignItems: 'center',
//     // height: 24,
//     fontSize:'11',
//     // textAlign: 'center',
//     // fontStyle: 'bold',
//     // flexGrow: 1,
//     margin: '2px',
// },
//   Description: {
//     // border: '2px solid rgb(5, 5, 7)',
//     width: '100%',
//     // flexDirection: 'col',
//     // height: '24',
//     fontSize:'11',
//     border:'solid',
//     borderLeft:'0px',
//     borderRight:'1px',
//     borderBottom:'1px',
//     borderTop:'1px',

//     // bo
//   },
//   MyRow:
//   {
//     border: '1px solid rgb(5, 5, 7)',

//     backgroundColor: 'grey',
//     // flexDirection: 'col',
//     width: '10%',
//     fontSize: '11',
//     padding:'px'
//     // height: '24',
//     // fontStyle: 'bold',
//   }
 
// });      
                            
// const FormPdf=()=>(
//   <Document file="file.pdf" download>
//     <Page size="A4">
//       <View style={styles.container}>
//         {/* <Text>hiiii</Text> */}
//        <Text style={styles.MyRow}> Course Content</Text>
//        <Text style={styles.Description}>
//           Introduction (Introduction, basic component of AI, Identifying AI systems, branches of
//           AI, etc.); Reasoning and Knowledge Representation (Introduction to Reasoning and
//           Knowledge Representation, Propositional Logic, First order Logic); Problem Solving by
//           Searching (Informed searching, Uninformed searching, Local searching.); Constraint
//           Satisfaction Problems; Adversarial Search (Min-max algorithm, Alpha beta pruning,
//           Game-playing); Learning (Unsupervised learning, Supervised learning, Reinforcement
//           learning) ;Uncertainty handling (Uncertainty in AI, Fuzzy logic); Recent trends in AI and
//           applications of AI algorithms (trends, Case study of AI systems, Analysis of AI systems)
//        </Text>
//       </View>
//     </Page>
//   </Document>
// );
// export default FormPdf