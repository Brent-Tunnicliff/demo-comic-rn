import { useEffect, useState } from "react";
import { Comic } from "../../data/model";
import { getLatestComic } from "../../data/client";
import { isNil } from "lodash";
import LoadingScreen from "./helper/LoadingScreen";
import ErrorScreen from "./helper/ErrorScreen";
import View from "../component/common/View";
import ComicsList from "../component/comic/ComicsList";
import { ScreenProps } from "../Navigator";

export default ({ navigation, route }: ScreenProps<'Home'>) => {
    const getLatestComicResult = getLatestComicHook();

    if (getLatestComicResult.isLoading) {
        return <LoadingScreen />;
    };

    if (isNil(getLatestComicResult.comic)) {
        const error = getLatestComicResult.error;
        return (
            <ErrorScreen
                onRetry = { () => getLatestComicResult.retry() }
                message = { `Loading comics failed with error ${ isNil(error) ? 'unknown' : error.message }` }
            />
        );
    };

    return (
        <View
            flex = { 1 }
        >
            <ComicsList latestComic = { getLatestComicResult.comic } />
        </View>
    );
};

type GetLatestComicHookResult = {
    comic?: Comic,
    error?: Error,
    isLoading: boolean,
    retry: () => void
};

const getLatestComicHook = (): GetLatestComicHookResult => {
    const [comic, setComic] = useState<Comic | undefined>(undefined);
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