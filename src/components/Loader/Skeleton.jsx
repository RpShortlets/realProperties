import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ContentLoader from 'react-content-loader'


export const SkeletonLoader = ({count, height, styles, width, circle}) => {
    return (
        <>
            <Skeleton
                count={count}
                height={height}
                width={width}
                circle={circle}

                containerClassName={styles}
            />
        </>
    )
}

export const ContentLoaders = (props) => {
    return (
        <ContentLoader
            width='100%'
            height="100%"
            viewBox="0 0 100% 100%"
            style={{ width: '100%' }}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            {...props}
        >
            <rect x="4" y="8" rx="3" ry="3" width="4" height="284" />
            <rect x="6" y="96%" rx="3" ry="3" width="100%" height="2" />
            <rect x="99.5%" y="9" rx="3" ry="3" width="2" height="98%" />
            <rect x="5" y="10" rx="2" ry="2" width="250" height="98%" />
            <rect x="5" y="8" rx="3" ry="3" width="100%" height="2" />
            <rect x="280" y="41" rx="3" ry="3" width="280" height="15" />
            <rect x="280" y="80" rx="3" ry="3" width="50%" height="10" />
            <circle cx="295" cy="140" r="15" />
            <circle cx="365" cy="140" r="15" />
            <circle cx="435" cy="140" r="15" />
            <rect x="280" y="200" rx="3" ry="3" width="40%" height="15" />
            <rect x="280" y="250" rx="3" ry="3" width="100" height="13" />
        </ContentLoader>
    )
}

export const SliderLoader = (props) => {
    return (
        <ContentLoader
        width={300}
        height={350}
        viewBox="0 0 300 350"
            style={{ width: '100%' }}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            {...props}
        >
            <rect x="10" y="1" rx="3" ry="3" width="100%" height="20" />
            <rect x="10" y="50" rx="3" ry="3" width="45%" height="40" />
            <rect x="160" y="50" rx="3" ry="3" width="45%" height="40" />
        </ContentLoader>
    )
}
