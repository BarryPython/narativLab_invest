

export default function Section({Icon=null,title,children}) {
    return (
        <section>
            <div className="header">
                {Icon && <Icon />}
                <h2 className={Icon == null ? "alone" : ""}>{title}</h2>
            </div>
            {children}
        </section>
    )
}