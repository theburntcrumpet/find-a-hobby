import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import LoadingSpinner from "./LoadingSpinner"
import { useEffect, useState } from "react";

interface Props {
    hobby:string,
    spinTime:number
}

export default function Suggestion(props:Props) {
    const [loadingFinished, setLoadingFinished] = useState<boolean>(false);
    useEffect(()=>{
        setInterval(()=> {setLoadingFinished(true)}, props.spinTime)
    },[props.hobby]);
    return (<div style={{padding:"2em"}}>
        {
            loadingFinished ? 
            <>
            <Heading size={"xl"} textAlign={"center"}>
                {props.hobby}
            </Heading>
            <Flex justifyContent="center" alignItems="center">
                <Button textAlign={"center"} colorScheme={"teal"} onClick={()=>window.open(`https://www.youtube.com/results?search_query=getting+started+with+${props.hobby}`)}>Find out more about {props.hobby} on YouTube! 🎥</Button>
            </Flex>
            </> :
            <LoadingSpinner/>
        }
    </div>)
}