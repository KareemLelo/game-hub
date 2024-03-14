import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/image-URL";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        Skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
