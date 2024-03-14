import {
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem marginY={"10px"}>
        <HStack>
          <SkeletonCircle boxSize={"32px"} borderRadius={8}></SkeletonCircle>
          <SkeletonText mt="4" noOfLines={1}>
            qaweqwd
          </SkeletonText>
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
