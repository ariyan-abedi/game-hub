import { Badge } from '@chakra-ui/react';
import { px } from 'framer-motion';
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <Badge
      colorScheme={color}
      fontSize="15px"
      paddingX={2}
      borderRadius="4"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
