import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Want an easier way to schedule meetings?</h2>
            <p className="text-xl mb-6">Join thousands of professionals who trust TimelyMeet to manage their time efficiently.</p>
            <Link href='/dashboard'>
                <Button size='lg' variant='secondary' className="text-blue-600 cursor-pointer">
                    Start For free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </Link>
        </div>
    )
}

export default CTA;
