// Creating And Exporting Icon Component As Default
export default function IconsComponent({name, small, bgColor, fgColor}) {
    // Conditional Rendering
    if (small) {
        return (
            <div>
                <span className={`bi ${name}`} />
            </div>
        );
    } else {
        return (
            <div>
                <span className={`bi ${name}`} />
            </div>
        );
    }
}