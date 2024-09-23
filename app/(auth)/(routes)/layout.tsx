export default function LayoutAuth({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-center h-full items-center">
            <p>Dashboard Clinic</p>
            <h1 className="text-3xl my-2">
                Welcome!
            </h1>
            { children }
        </div>
    )
}