import connectDB from "@/lib/mongodb";
import { NextResponse, NextRequest } from "next/server";
import Event from "@/database/event.model";

export const POST = async (req: NextRequest ) => {
    try {
        await connectDB();

        const formData = await req.formData();
        let event;
        try {
            event = Object.fromEntries(formData.entries());
        } catch (error) {
            return NextResponse.json({message:"Invalid form data format", error:error},{status:400})
        }

        const createdEvent = await Event.create(event);

        return NextResponse.json({message:"Event created successfully", event:createdEvent},{status:201});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message:"Event cretion failed", error:error},{status:500})
    }
}