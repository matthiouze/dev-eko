<p>Nouveau message reçu depuis le formulaire de contact :</p>

<ul>
    <li><strong>Nom:</strong> {{ $data['name'] ?? '-' }}</li>
    <li><strong>Email:</strong> {{ $data['email'] ?? '-' }}</li>
    <li><strong>Téléphone:</strong> {{ $data['tel'] ?? '-' }}</li>
</ul>

<p><strong>Message:</strong></p>
<p>{{ $data['message'] ?? '-' }}</p>
