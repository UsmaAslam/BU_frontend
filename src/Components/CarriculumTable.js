import React from 'react'

export default function CarriculumTable() {
  return (
    <div className='container mt-3'>
        <table className='MyTable'>
            <tbody>
                <tr>
                    <td className='MyRow'>
                        COurse Code
                    </td>
                    <td>
                        Course Code 1
                    </td>
                </tr>
                <tr>
                    <td className='MyRow'>
                        Course Title
                    </td>
                    <td className='MyTable'>
                        Programming
                    </td>
                </tr>
                <tr>
                    <td className='MyRow'>
                        Credit Hours
                    </td>
                    <td className='MyTable'>
                       2 Hours
                    </td>
                </tr>
                <tr>
                    <td className='MyRow'>
                        Course Content
                    </td>
                    <td className='MyTable'>
                            Introduction (Introduction, basic component of AI, Identifying AI systems, branches of
                            AI, etc.); Reasoning and Knowledge Representation (Introduction to Reasoning and
                            Knowledge Representation, Propositional Logic, First order Logic); Problem Solving by
                            Searching (Informed searching, Uninformed searching, Local searching.); Constraint
                            Satisfaction Problems; Adversarial Search (Min-max algorithm, Alpha beta pruning,
                            Game-playing); Learning (Unsupervised learning, Supervised learning, Reinforcement
                            learning) ;Uncertainty handling (Uncertainty in AI, Fuzzy logic); Recent trends in AI and
                            applications of AI algorithms (trends, Case study of AI systems, Analysis of AI systems)
                    </td>
                </tr>  
                <tr>
                    <td  className='MyRow'>
                        Reference Material
                    </td>
                    <td className='MyTable'>
                    1. Stuart Russell and Peter Norvig, Artificial Intelligence. A Modern Approach, 3rd
                        edition, Prentice Hall, Inc., 2010.
                    2. Hart, P.E., Stork, D.G. and Duda, R.O., 2001. Pattern classification. John Willey &
                    Sons.
                    3. Luger, G.F. and Stubblefield, W.A., 2009. AI algorithms, data structures, and idioms
                    in Prolog, Lisp, and Java. Pearson Addison-Wesley.
                    </td>
                </tr>  
            </tbody>
        </table>
      
    </div>
  )
}
