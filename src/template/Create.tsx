import { Form, Formik, FormikProps } from "formik";



export interface FormikInterface{
    [field:string]:any;
}


export interface FormikInitialState{
    [key:string]:any;
}







export interface CreateInterface{
    initialValue:FormikInitialState,
    formInterface: FormikInterface;
    validationSchema:any
}






const Create: React.FC<CreateInterface> = ({formInterface,initialValue,validationSchema}) =>{
    return(
        <>
            <Formik
            initialValues={initialValue}
            
            onSubmit={(values,action)=>{
                console.log(values);
                action.setSubmitting(false);
            }}
            validationSchema={validationSchema}
            >
                {
                    ({}:FormikProps< typeof formInterface>)=>(
                        <Form>

                        </Form>
                    )
                }
            </Formik>
        </>
    )
}



export default Create;