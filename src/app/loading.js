export default function Loading() {
    return (
        <section
            className="container mx-auto px-8 py-36 text-center 
            sm:px-12"
        >
            <h1
                className="mb-12 text-5xl leading-tight animate-pulse max-w-xl w-full bg-slate-300 py-2.5 mx-auto rounded-md
                sm:text-6xl"
            ></h1>
            <p className="mb-1.5 leading-relaxed animate-pulse max-w-sm w-full bg-slate-300 py-1.5 mx-auto rounded-md"></p>
            <p className="mb-12 animate-pulse max-w-lg w-full bg-slate-300 py-1.5 mx-auto rounded-md"></p>
            <div className="mx-auto flex w-fit flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button className="animate-pulse min-w-52 max-w-sm w-full bg-slate-300 py-1.5 rounded-lg"></button>
                <button className="animate-pulse min-w-52 max-w-sm w-full bg-slate-300 py-1.5 rounded-lg"></button>
            </div>
        </section>
    );
}
