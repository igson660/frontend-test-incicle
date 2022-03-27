import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';

export const Endormarketing = () => {
  return(
    <Box
      width="21.5vw"
      height="40vh"
      bgcolor="#FFF2DE"
      marginTop="37px"
      marginBottom="20px"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
    >
      <Typography
        margin="1vw"
        variant="h6"
        component="header"
        gutterBottom
      >
        Endormarketing
      </Typography>
      <Typography
        margin="1vw"
        marginTop="1vh"
        marginBottom="2vh"
        fontSize="14pt"
        variant="Body1"
        gutterBottom
      >
        Endomarketing está relacionado às ações de treinamento ou qualificação dos colaboradores da empresa visando um melhor serviço para o cliente. Marketing interno, devido ao nome, é usualmente confundido com Endomarketing mesmo sendo conceitos diferentes.
      </Typography>
      <Button
        variant="outlined"
      >
        Dispensar
      </Button>
    </Box>
  );
};
