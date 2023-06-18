import { useEffect, useState } from "react";
import { Comic } from "../../data/model";
import { getLatestComic } from "../../data/client";
import { isNil } from "lodash";
import { ScreenProps } from "../Navigator";
import { FullScreenView } from "../component/common";
import { ComicsList } from "../component/comic";
import { ErrorScreen, LoadingScreen } from "./helper";

export const ComicListScreen = ({ navigation, route }: ScreenProps<'Home'>) => {
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

    const onComicSelect = (comic: Comic) => {
        navigation.navigate('ComicViewer', { comic });
    };

    return (
        <FullScreenView isNavBarHidden = { true } >
            <ComicsList 
                latestComic = { getLatestComicResult.comic }
                onComicSelect = { onComicSelect }
            />
        </FullScreenView>
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