'use client'

import {
    GoogleMap,
    InfoWindow,
    Marker,
    useLoadScript
} from '@react-google-maps/api'
import { AlertCircle } from 'lucide-react'
import { Mark } from './mark'
import { Typography } from './typography'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { Skeleton } from './ui/skeleton'

const DynamicMap = () => {
    /**
     * Load the Google maps script
     */
    const { isLoaded, loadError } = useLoadScript({
        id: 'google-maps-script',
        googleMapsApiKey: process.env
            .NEXT_PUBLIC_GOOGLE_CLOUD_PLATFORM_API_KEY! as string
    })

    /**
     * If there was an error loading the map, show an alert
     */
    if (loadError) {
        return (
            <div className='flex justify-center w-full py-12'>
                <Alert
                    variant='destructive'
                    className='max-w-96'>
                    <AlertCircle className='h-4 w-4' />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        There was a problem loading the map. Please try again
                        later.
                    </AlertDescription>
                </Alert>
            </div>
        )
    }

    /**
     * Get the latitude and longitude from the environment variables, parse as floats
     */
    const lat = parseFloat(process.env.NEXT_PUBLIC_APP_LOCATION_LATITUDE!)
    const lng = parseFloat(process.env.NEXT_PUBLIC_APP_LOCATION_LONGITUDE!)

    return (
        <div className='flex justify-center w-full'>
            {!isLoaded ? (
                <Skeleton className='rounded-lg shadow-md bg-brand-dark/50 dark:bg-brand-light/50 h-[400px] w-full' />
            ) : (
                <div className='h-[400px] w-full rounded-lg shadow-md overflow-hidden'>
                    <GoogleMap
                        center={{
                            lat,
                            lng
                        }}
                        zoom={14}
                        options={{
                            mapTypeControl: false,
                            fullscreenControl: false,
                            streetViewControl: false
                        }}
                        mapContainerStyle={{
                            height: '100%',
                            width: '100%'
                        }}>
                        <Marker
                            position={{ lat, lng }}
                            animation={google.maps.Animation.DROP}
                        />
                        <InfoWindow
                            position={{ lat, lng }}
                            options={{
                                pixelOffset: new google.maps.Size(0, -28)
                            }}>
                            <div className='flex flex-col items-center gap-2 w-24'>
                                <Mark className='h-6 w-6 text-brand-dark dark:text-brand-light' />
                                <Typography
                                    variant='h6'
                                    as='p'
                                    className='dark:text-background'>
                                    Fresh Pets
                                </Typography>

                                <a
                                    href='https://maps.app.goo.gl/YoyFbxQCqctqf6VB9'
                                    title='Get Directions to Fresh Pets'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    className='text-brand dark:text-brand font-bold hover:text-brand-dark hover:dark:text-brand-light'>
                                    Get Directions
                                </a>
                            </div>
                        </InfoWindow>
                    </GoogleMap>
                </div>
            )}
        </div>
    )
}

export default DynamicMap
