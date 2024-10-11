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
            <div className='flex w-full justify-center py-12'>
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
        <div className='flex w-full justify-center'>
            {!isLoaded ? (
                <Skeleton className='h-[400px] w-full rounded-lg bg-primary/50 shadow-md' />
            ) : (
                <div className='h-[400px] w-full overflow-hidden rounded-lg shadow-md'>
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
                            <div className='flex w-24 flex-col items-center gap-2'>
                                <Mark className='h-6 w-6 text-primary' />
                                <Typography
                                    variant='h6'
                                    as='p'>
                                    Fresh Pets
                                </Typography>

                                <a
                                    href='https://maps.app.goo.gl/YoyFbxQCqctqf6VB9'
                                    title='Get Directions to Fresh Pets'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    className='hover:text-primary-dark font-bold text-primary'>
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
