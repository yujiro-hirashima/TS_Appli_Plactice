import { FormControl, FormLabel, Input, ModalBody, Stack } from "@chakra-ui/react";
import { useLoginUser } from "../../hooks/useLoginUser";

const {loginUser:} = useLoginUser();

 export const DetailModalBody = (props)=>{
 const {user,isAdmin} = props;

   return(
    <ModalBody mx={4}>
    <Stack spacing={4}>
      <FormControl>
        <FormLabel>名前</FormLabel>
        <Input value={user?.username} isReadOnly />
      </FormControl>
      <FormControl>
        <FormLabel>フルネーム</FormLabel>
        <Input value={user?.name} isReadOnly />
      </FormControl>
      <FormControl>
        <FormLabel>MAIL</FormLabel>
        <Input value={user?.email} isReadOnly />
      </FormControl>
      <FormControl>
        <FormLabel>TEL</FormLabel>
        <Input value={user?.phone} isReadOnly />
      </FormControl>
    </Stack>
  </ModalBody>

   );
 }