export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        <em>Commencez à ajouter des objets à votre liste de voyage 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'Vous avez tout ! Prêt à partir ✈️'
          : `💼 Vous avez ${numItems} objet${
              numItems > 1 ? 's' : ''
            } sur votre liste, et vous en avez déjà emballé
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
