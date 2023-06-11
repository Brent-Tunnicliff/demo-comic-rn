import { useEffect, useState } from "react";
import { comic } from "../../data/model";
import { getLatestComic } from "../../data/client";
import { isNil } from "lodash";
import { Box } from "native-base";

export const ComicList = () => {
    const getLatestComicResult = getLatestComicHook();

    // TODO: Implement view.
    return <Box />;
};

type GetLatestComicHookResult = {
    comic?: comic,
    error?: any,
    isLoading: boolean,
    retry: () => void
};

const getLatestComicHook = (): GetLatestComicHookResult => {
    const [comic, setComic] = useState<comic | undefined>(undefined);
    const [error, setError] = useState<Error | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const getComic = () => {
        if (isLoading || !isNil(comic) || !isNil(error)) {
            return;
        }

        setIsLoading(true);
        getLatestComic()
            .then((comic) => {
                setComic(comic);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getComic()
    });

    return {
        comic,
        error,
        isLoading,
        retry: getComic
    };
};