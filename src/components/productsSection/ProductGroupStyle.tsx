import styled from 'styled-components'
import { motion } from 'framer-motion';

export const ProductGroupStyled = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    row-gap: 16px;
    column-gap: 12px;
    flex-wrap: wrap;
`
export const MotionDiv = styled(motion.div)`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  gap: 20px;
`;